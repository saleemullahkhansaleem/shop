import ProfileSidebar from "./components/ProfileSidebar";

const layout = ({ children }) => (
  <div className="container grid items-start grid-cols-12 gap-6 pt-4 pb-16">
    <ProfileSidebar />
    {children}
  </div>
);

export default layout;
