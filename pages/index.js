import MeetupList from "../components/meetups/MeetupList"
import Layout from '../components/layout/Layout'
const DUMMY_MEETUP= [
  {
    id:'m1',
    title: 'A First Meetup',
  
    image:'https://images.unsplash.com/photo-1527126887308-6cdf83c7d844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description:'This is a second meetup'
  },
  {
    id:'m2',
    title: 'A Second Meetup',
  
    image:'https://images.unsplash.com/photo-1527126887308-6cdf83c7d844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description:'This is a second meetup'
  },
];
const HomePage =()=>{
  return <Layout>
    <MeetupList meetups={DUMMY_MEETUP}/>
  </Layout> 
}
export default HomePage;