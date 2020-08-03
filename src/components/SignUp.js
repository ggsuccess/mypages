import React, { useState } from 'react';

const SignUp = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nick, setNick] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
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
  const handleSubmit = () => {
    fetch('http://localhost:5000/SignUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, pw: pw, nick: nick, gender: gender }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert('회원가입에 성공했습니다.'), console.log(res);
      })
      .catch((err) => console.error(err), alert('오류발생'));
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
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
        (0~30자의 영문/숫자)
        <br />
        비밀번호:
        <input
          type="password"
          name="pw"
          value={pw}
          maxLength={30}
          onChange={onChangePw}
        ></input>
        (30자 이하)
        <br />
        닉네임:(ㄱ)
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
          checked
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
        <select name="birthdayYear" onChange={onChangebirthday}>
          <option value="1970">1970년</option>
          <option value="1971">1971년</option>
          <option value="1972">1972년</option>
          <option value="1973">1973년</option>
          <option value="1974">1974년</option>
          <option value="1975">1975년</option>
          <option value="1976">1976년</option>
          <option value="1977">1977년</option>
          <option value="1978">1978년</option>
          <option value="1979">1979년</option>
          <option value="1980">1980년</option>
          <option value="1981">1981년</option>
          <option value="1982">1982년</option>
          <option value="1983">1983년</option>
          <option value="1984">1984년</option>
          <option value="1985">1985년</option>
          <option value="1986">1986년</option>
          <option value="1987">1987년</option>
          <option value="1988">1988년</option>
          <option value="1989">1989년</option>
          <option value="1990">1990년</option>
          <option value="1991">1991년</option>
          <option value="1992">1992년</option>
          <option value="1993">1993년</option>
          <option value="1994">1994년</option>
          <option value="1995">1995년</option>
          <option value="1996">1996년</option>
          <option value="1997">1997년</option>
          <option value="1998">1998년</option>
          <option value="1999">1999년</option>
          <option value="2000">2000년</option>
          <option value="2001">2001년</option>
          <option value="2002">2002년</option>
          <option value="2003">2003년</option>
          <option value="2004">2004년</option>
          <option value="2005">2005년</option>
          <option value="2006">2006년</option>
          <option value="2007">2007년</option>
          <option value="2008">2008년</option>
          <option value="2009">2009년</option>
          <option value="2010">2010년</option>
          <option value="2011">2011년</option>
          <option value="2012">2012년</option>
          <option value="2013">2013년</option>
          <option value="2014">2014년</option>
          <option value="2015">2015년</option>
          <option value="2016">2016년</option>
          <option value="2017">2017년</option>
          <option value="2018">2018년</option>
          <option value="2019">2019년</option>
          <option value="2020">2020년</option>
        </select>
        <select name="birthdayMonth" onChange>
          <option value="1">1월</option>
          <option value="2">2월</option>
          <option value="3">3월</option>
          <option value="4">4월</option>
          <option value="5">5월</option>
          <option value="6">6월</option>
          <option value="7">7월</option>
          <option value="8">8월</option>
          <option value="9">9월</option>
          <option value="10">10월</option>
          <option value="11">11월</option>
          <option value="12">12월</option>
        </select>
        <select name="birthdayDay" onChange>
          <option value="1">1일</option>
          <option value="2">2일</option>
          <option value="3">3일</option>
          <option value="4">4일</option>
          <option value="5">5일</option>
          <option value="6">6일</option>
          <option value="7">7일</option>
          <option value="8">8일</option>
          <option value="9">9일</option>
          <option value="10">10일</option>
          <option value="11">11일</option>
          <option value="12">12일</option>
          <option value="13">13일</option>
          <option value="14">14일</option>
          <option value="15">15일</option>
          <option value="16">16일</option>
          <option value="17">17일</option>
          <option value="18">18일</option>
          <option value="19">19일</option>
          <option value="20">20일</option>
          <option value="21">21일</option>
          <option value="22">22일</option>
          <option value="23">23일</option>
          <option value="24">24일</option>
          <option value="25">25일</option>
          <option value="26">26일</option>
          <option value="27">27일</option>
          <option value="28">28일</option>
          <option value="29">29일</option>
          <option value="30">30일</option>
          <option value="31">31일</option>
        </select>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default SignUp;
