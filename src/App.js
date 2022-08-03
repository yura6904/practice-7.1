import React, {useState} from 'react';

const timeDifference = (y1, mth1, d1, y2, mth2, d2, h1, m1, s1, h2, m2, s2) => {
  let resultDifference = ''

  let milliSeconds1 = h1 * 60 * 60 * 100 + m1 * 60 * 100 + s1 * 100
  let milliSeconds2 = h2 * 60 * 60 * 100 + m2 * 60 * 100 + s2 * 100

  let milliDifference = milliSeconds2 - milliSeconds1
  let hourDifference = milliDifference / (60 * 60 * 100)

  let yearDifference = y2 - y1
  let monthDifference = mth2 - mth1
  let daysDifference = d2 - d1

  if (yearDifference === 0 && monthDifference === 0 && daysDifference === 0) {
    if (hourDifference <= 1) return resultDifference = '12 минут назад'
    else return resultDifference = '5 часов назад'
  }
  else if (yearDifference === 0 && monthDifference === 0 && daysDifference !== 0) {
    return resultDifference = `${daysDifference} день/дней назад`
  }
  else if (yearDifference === 0 && monthDifference > 0) {
    return resultDifference = `${monthDifference} месяц(а)/месяцев назад`
  }
  else if (yearDifference > 0) {
    return resultDifference = `${yearDifference} год(а)/лет назад`
  }
  return resultDifference
}

function DateTimePretty(props) {

  const videoDate = new Date(props.date)
  const currentDateTime = new Date()

  let y1 = videoDate.getFullYear()
  let y2 = currentDateTime.getFullYear()
  let mth1 = videoDate.getMonth()
  let mth2 = currentDateTime.getMonth()
  let d1 = videoDate.getDate()
  let d2 = currentDateTime.getDate()
  let h1 = videoDate.getHours()
  let h2 = currentDateTime.getHours()
  let m1 = videoDate.getMinutes()
  let m2 = currentDateTime.getMinutes()
  let s1 = videoDate.getSeconds()
  let s2 = currentDateTime.getSeconds()

  let timeResult = timeDifference(y1, mth1, d1, y2, mth2, d2, h1, m1, s1, h2, m2, s2)
  return (
    <DateTime date={timeResult}/>
  )
}

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-08-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-08-02 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}