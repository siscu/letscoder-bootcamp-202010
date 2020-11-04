function Avatar(props) {
  const { token, onAvatar, onProfile } = props;
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className="avatar"
      onClick={() => (token ? onProfile(true) : onAvatar(true))}
    >
      <div className="avatar__initials">SG</div>
      <img
        className="avatar__image"
        src= {token ? user.image : "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" }
        alt="alt"
      />
      <div className="avatar__notifications">01</div>
    </div>
  );
}
