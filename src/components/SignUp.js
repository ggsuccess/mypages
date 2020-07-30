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
        <div title="회원 가입">회원 가입</div>
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
        <select name="birthdayYear" onChange={}>
          <option label="" value="">
            1970년
          </option>
          <option value="">1971년</option>
          <option value="">1972년</option>
          <option value="">1973년</option>
          <option value="">1974년</option>
          <option value="">1975년</option>
          <option value="">1976년</option>
          <option value="">1977년</option>
          <option value="">1978년</option>
          <option value="">1979년</option>
          <option value="">1980년</option>
          <option value="">1981년</option>
          <option value="">1982년</option>
          <option value="">1983년</option>
          <option value="">1984년</option>
          <option value="">1985년</option>
          <option value="">1986년</option>
          <option value="">1987년</option>
          <option value="">1988년</option>
          <option value="">1976</option>
          <option value="">1976</option>
          <option value="">1976</option>
          <option value="">1976</option>
        </select>
        <select name="birthdayMonth" onChange>
          <option value={1}>1월</option>
          <option value={2}>2월</option>
          <option value={3}>3월</option>
          <option value={4}>4월</option>
          <option value={5}>5월</option>
          <option value={6}>6월</option>
          <option value={7}>7월</option>
          <option value={8}>8월</option>
          <option value={9}>9월</option>
          <option value={10}>10월</option>
          <option value={11}>11월</option>
          <option value={12}>12월</option>
        </select>
        <select>
          <option value="1일">1일</option>
        </select>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default SignUp;