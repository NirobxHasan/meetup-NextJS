import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient,ObjectId} from 'mongodb'
import { Fragment } from "react";
import Head from "next/head";
function MeetupDetails(props){
    const router = useRouter();
    const meetupId = router.query.meetupId
    return <Fragment>
        <Head>
            {/* <title>{props.meetupData.title}</title> */}
        </Head>
<MeetupDetail image={props.meetupData.image} 
                        title={props.meetupData.title} 
                        address={props.meetupData.address}
                        description={props.meetupData.description}/>
    </Fragment> 

}
export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://nextjs_project:sShnXd5RFMlCiswr@cluster0.jiiff.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetsup');

    const meetups = await meetupsCollection.find({}, {_id:1}).toArray();

    client.close()
    return {
        fallback: 'blocking', //false mean support all item in the list, outside of list give 404 error. true/'blocking' just generate dynamically on the server incoming request. 
        paths : meetups.map(meetup =>( {params: {meetupId:meetup._id.toString()}}))
        //  [
        //     {
        //         params: {
        //             meetupId :'m1'
        //         }
        //     },
        //     {
        //         params: {
        //             meetupId :'m2'
        //         }
        //     },
        // ]
    }
}

export async function getStaticProps( context){
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://nextjs_project:sShnXd5RFMlCiswr@cluster0.jiiff.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetsup');

    const selectdMeetup = await meetupsCollection.findOne({_id:ObjectId(meetupId)});

    client.close()
    return {
        props:{
            meetupData:{
                id: selectdMeetup._id.toString(),
                title: selectdMeetup.title,
                address: selectdMeetup.address,
                image: selectdMeetup.image,
                description: selectdMeetup.description,

            }
        }
    }
}
export default MeetupDetails;