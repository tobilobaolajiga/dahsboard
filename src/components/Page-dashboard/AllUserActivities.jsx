import UserActivities from './UserActivities';
export default function AllUserActivities() {
  return (
    <div>
      <div className="mx-6 mt-8">
        <p className="font-poppins text-[#464255] text-sm font-semibold mb-6">
          User Activities
        </p>
        <UserActivities
          userImg="./firstUser.svg"
          activity="Exported Transaction History."
          time="Just now"
        />
        <UserActivities
          userImg="./secondUser.svg"
          activity="Created a new user."
          time="59 minutes ago"
        />
        <UserActivities
          userImg="./thirdUser.svg"
          activity="Created a new institution."
          time="12 hours ago"
        />
      </div>
    </div>
  );
}
