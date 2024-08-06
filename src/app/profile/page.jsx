const profile = () => (
  <div className="px-6 pt-5 rounded shadow pb-7">
    <h4 className="mb-4 text-lg font-medium capitalize">Profile information</h4>
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first">First name</label>
          <input type="text" name="first" id="first" className="input-box" />
        </div>
        <div>
          <label htmlFor="last">Last name</label>
          <input type="text" name="last" id="last" className="input-box" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            className="input-box"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" className="input-box">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" className="input-box" />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input type="text" name="phone" id="phone" className="input-box" />
        </div>
      </div>
    </div>

    <div className="mt-4">
      <button
        type="submit"
        className="px-4 py-3 font-medium text-center text-white transition border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary"
      >
        save changes
      </button>
    </div>
  </div>
);

export default profile;
