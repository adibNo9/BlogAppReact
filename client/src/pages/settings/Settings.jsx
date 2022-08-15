import './settings.css';
import SideBar from '../../components/sidebar/SideBar'

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img src='profile-pic/13.png' alt='ProfilePicture' />
            <label htmlFor='fileInput'>
          <i className="settingsPPIcon fa-solid fa-circle-user"></i>
          </label>
          <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="adib" />
          <label>Email</label>
          <input type="email" placeholder="adib@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default Settings;