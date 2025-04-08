import family from '../family.svg';
import holiday from '../going-holiday.svg';
import home from '../home.svg';
import em_fund from '../em-fund.svg';
import debt from '../debt.svg';
import vision from '../vision.svg';

const milestones = [
    { title: "Baby's birth", image: family},
    { title: "Holiday", image: holiday},
    { title: "Retire", image: home},
    { title: "New home", image: em_fund},
    { title: "Emergency fund", image: debt},
    { title: "Debt free", image: vision},
    { title: "Make a contribution to my community through philantrophy", image: debt}
];

const Timeline = () => (
  <div className="timeline-wrapper">
    <div className="timeline">
      {milestones.map((milestone, key) => (
        <main>
            <div key={key} style={{background: "#173F4B", width: "130px", height: "136px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)"}}>
                <img src={milestone.image} alt="Family" />
                <p style={{textAlign: "center"}}>{milestone.title}</p>
            </div>
       </main>
      ))}
    </div>
  </div>
);
export default Timeline;