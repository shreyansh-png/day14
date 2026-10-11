
const UserCard = ({ user }) => {
  return (
    <div className="border rounded p-3">

      <h3 className="font-semibold">
        {user.name.firstname} {user.name.lastname}
      </h3>
      <p className="text-sm">@{user.username}</p>
      <p className="text-sm">{user.email}</p>
    </div>
  );
};

export default UserCard;