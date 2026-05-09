import { useAvatar } from "../context/AvatarContext";

export function Avatar() {
  const avatar = useAvatar();

  return (
    <div>
      Avatar State:
      {avatar.state}
    </div>
  );
}
