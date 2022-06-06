const Header = ({ number, setChecked }) => {
   return (
      <>
         <div className="header">{`You have ${number} tasks left!`}</div>
         <div className="option">
            <label>Not Finish</label>
            <input type="checkbox" onChange={({target}) => setChecked(target.checked)}/>
         </div>
      </>
   );
};

export default Header;
