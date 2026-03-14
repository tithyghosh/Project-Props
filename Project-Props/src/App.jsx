

import './App.css'
import Card from './Components/Card'
const App = () => {
const jobOpenings = [  
  {
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    saved: false,
    company: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/c6/18/ed/c618edb71c600432c13ebd6ef2a0c317.jpg",
    saved: false,
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    saved: false,
    company: "Apple",
    datePosted: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "London, UK",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
    saved: false,
    company: "Amazon",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Hyderabad, India",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    saved: false,
    company: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Remote, USA",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    saved: false,
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Los Angeles, USA",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/67/07/a9/6707a9c07a04af2b260aca69fcae891c.jpg",
    saved: false,
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "San Jose, USA",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/3c/16/69/3c166947763be9a6a9e2be1416447f00.jpg",
    saved: false,
    company: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Austin, USA",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/e4/88/77/e488777d759169c74b74aa95f07adbed.jpg",
    saved: false,
    company: "Tesla",
    datePosted: "1 day ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "California, USA",
    applyNow: "Apply Now"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/30/6f/6a/306f6a14403921a4d8b4ab53d3c9f2a3.jpg",
    saved: false,
    company: "Spotify",
    datePosted: "9 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$47/hr",
    location: "Stockholm, Sweden",
    applyNow: "Apply Now"
  }
];
  return (
    <div className="parent">
     {jobOpenings.map(function(elem, idx) {
      return <div key={idx}>
        <Card brandLogo={elem.brandLogo} company={elem.company} datePosted={elem.datePosted}
      post={elem.post} tag1 = {elem.tag1} tag2= {elem.tag2} pay={elem.pay} location= {elem.location}/>
     
      </div>
     })}
    </div>
  )
}

export default App