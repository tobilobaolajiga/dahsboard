import Profile from './Profile';
import NotBar from './NotBar';
import NotContent from './NotContent';
export default function Notifications() {
  return (
    <div>
      <div className="bg-white m-4">
        <Profile />
        <div className="mt-14">
          <NotBar />
          <div>
            <NotContent
              content="First of Nigeria is currently experiencing transaction downtime"
              time="Just Now"
              img="./Bug.svg"
            />
            <NotContent
              content="First of Nigeria is currently experiencing transaction downtime"
              time="Just Now"
              img="./Bug.svg"
            />
            <NotContent
              content="First of Nigeria is currently experiencing transaction downtime"
              time="Just Now"
              img="./Bug.svg"
            />
            <NotContent
              content="Access Bank was restarted..."
              time="Today, 11:59 AM"
              img="./Button.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
