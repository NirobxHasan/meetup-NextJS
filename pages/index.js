import {MongoClient} from 'mongodb'
import MeetupList from "../components/meetups/MeetupList"
import Layout from '../components/layout/Layout'

const HomePage =(props)=>{
  return  <MeetupList meetups={props.meetup}/>
 
}


// *** page generate in build process

export async function getStaticProps(){

  const client = await MongoClient.connect('mongodb+srv://nextjs_project:sShnXd5RFMlCiswr@cluster0.jiiff.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetsup');

  const meetups = await meetupsCollection.find({}).toArray();  
  client.close();  

  return {
    props:{
      meetup: meetups.map(meetup =>(
        {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString()

        }
      ))
    },
    revalidate:10 //when data frequantly change, it will run every 10s . Time depends on how frequantly data changed.
  }
}



//**** if page changes every incoming request

// export async function getServerSideProps(context){

//   const req= context.req;
//   const res = context.res;

//   return {
//     props:{
//       meetup: DUMMY_MEETUP
//     }
//   };
// }

export default HomePage;

