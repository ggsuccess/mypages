import React, { useState } from 'react';

const SignUp = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nick, setNick] = useState('');
  const [gender, setGender] = useState('');
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  return (
    <>
      <form onSubmit={} method="post">
        <div>회원 가입</div>
        아이디:
        <input
          type="text"
          name="id"
          value={id}
          maxLength={30}
          autoFocus={true}
          onChange={onChangeId}
        ></input>
        <br />
        비밀번호:
        <input
          type="password"
          name="pw"
          value={pw}
          maxLength={30}
          onChange={onChangePw}
        ></input>
        <br />
        닉네임:
        <input
          type="text"
          name="nickname"
          value={nick}
          maxLength={30}
          onChange={onChangeNick}
        ></input>
        <br />
        성별:
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={onChangeGender}
        >
          남성
        </input>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={onChangeGender}
        >
          여성
        </input>
        <br />
        생년월일:
        <select name="birthdayYear">
          <option value="">1970</option>
          <option value="">1971</option>
          <option value="">1972</option>
          <option value="">1973</option>
          <option value="">1974</option>
          <option value="">1975</option>
          <option value="">1976</option>
        </select>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default SignUp;
