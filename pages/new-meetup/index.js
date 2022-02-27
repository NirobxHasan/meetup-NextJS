import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUp(){
    function addMeetupHandler(enterMeetupData){
        console.log(enterMeetupData);

    }
    return <NewMeetupForm onAddMeetup ={addMeetupHandler}/>
}

export default NewMeetUp;