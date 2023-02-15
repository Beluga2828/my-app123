import { useState } from "react"


const Form12 = () => {
  const [details, setDetails] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });
  const peoples = [
    {
      userName: 'john',
      userEmail: 'john@123',
      userMessage: 'login'
    },
    {
      userName: 'john1',
      userEmail: 'john@1231',
      userMessage: 'login1'
    }, {
      userName: 'john2',
      userEmail: 'john@1232',
      userMessage: 'login2'
    }, {
      userName: 'john3',
      userEmail: 'john@1233',
      userMessage: 'login3'
    }, {
      userName: 'john4',
      userEmail: 'john@1234',
      userMessage: 'login4'
    }, {
      userName: 'john5',
      userEmail: 'john@1235',
      userMessage: 'login5'
    }, {
      userName: 'john6',
      userEmail: 'john@1236',
      userMessage: 'login6'
    }, {
      userName: 'john7',
      userEmail: 'john@1237',
      userMessage: 'login7'
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    let userDetails = {
      userName: details.user_name,
      userEmail: details.user_email,
      userMessage: details.user_message
    };
    let account = [];
    account.push(userDetails);
    console.log(JSON.stringify(account[0]));
    console.log();
    function checkName(people) {
      return people.userName + people.userEmail === userDetails.userName + userDetails.userEmail
    };
    if (peoples.some(checkName)) {
      return console.log('login successful');
    } else {
      return alert('wrong deatils');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label>Name:</label>
          <input type="text" id="name" name="user_name" onChange={(e) => setDetails({
            ...details,
            user_name: e.target.value
          })} value={details.user_name} />
        </li>
        <li>
          <label>E-mail:</label>
          <input type="email" id="mail" name="user_email" onChange={(e) => setDetails({ ...details, user_email: e.target.value })} value={details.user_email} />
        </li>
        <li>
          <label>Message:</label>
          <textarea id="msg" name="user_message" onChange={(e) => setDetails({ ...details, user_message: e.target.value })} value={details.user_message}></textarea>
        </li>
        <li>
          <button type="submit">submit</button>
        </li>
      </ul>
    </form>
  )
}

export default Form12;