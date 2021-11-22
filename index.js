const cp = require('child_process')

// testing data
const datas = [
  {
    "origin": "/a/how-do-labor-meds-work-and-what-are-the-risks",
    "destination": "/a/labor-induction",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/what-is-a-false-negative",
    "destination": "/a/false-negative-on-pregnancy-tests",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/episiotomies",
    "destination": "/a/what-is-an-episiotomy",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/how-long-to-heal-from-episiotomy",
    "destination": "/a/what-is-an-episiotomy",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/caring-for-the-umbilical-cord",
    "destination": "/a/umbilical-cord",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/how-accurate-home-pregnancy-tests",
    "destination": "/a/best-pregnancy-tests",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/types-of-home-pregnancy-tests",
    "destination": "/a/best-pregnancy-tests",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/top-12-babyproofing-products",
    "destination": "/a/top-9-babyproofing-products",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/news/target-car-seat-trade-in-program-september-2020",
    "destination": "/news/target-car-seat-trade-in-program",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/news/target-car-seat-trade-in-september-2019;",
    "destination": "/news/target-car-seat-trade-in-program",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/news/target-car-seat-trade-in-april-may-2019",
    "destination": "/news/target-car-seat-trade-in-program",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/news/toy-insider-hottest-toys-2020",
    "destination": "/news/toy-insider-hottest-toys",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/can-i-prevent-intrauterine-growth-syndrome",
    "destination": "/a/iugr",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/what-is-gestational-diabetes",
    "destination": "/a/gestational-diabetes",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/symptoms-of-gestational-diabetes",
    "destination": "/a/gestational-diabetes",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/treatments-for-gestational-diabetes",
    "destination": "/a/gestational-diabetes",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/gestational-diabetes-risk-factors",
    "destination": "/a/gestational-diabetes",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/breastfeeding-while-pregnant",
    "destination": "/a/what-you-need-to-know-about-breastfeeding-while-pregnant",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/im-pregnant-can-i-keep-breastfeeding",
    "destination": "/a/what-you-need-to-know-about-breastfeeding-while-pregnant",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/is-it-ok-to-keep-breastfeeding-if-im-pregnant",
    "destination": "/a/what-you-need-to-know-about-breastfeeding-while-pregnant",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/glucose-challenge-screening-test",
    "destination": "/a/glucose-screening-and-tolerance-tests",
    "amp": {
      "origin": true,
      "destination": true
    }
  },
  {
    "origin": "/a/glucose-tolerance-test",
    "destination": "/a/glucose-screening-and-tolerance-tests",
    "amp": {
      "origin": true,
      "destination": true
    }
  }
]

for (const item of datas) {
  const result = cp.spawnSync('curl', ['-Ik', `https://qa-www.thebump.com${item.origin}`])
  const location = result.stdout.toString().split("\n")[4].split(": ")[1].trim()
  
  // when intergate with thirdpart
  // console.log(`<p style="border-bottom: 2px solid blue">${item.origin} need redirect to ====> ${item.destination}, ===> valid result: <span style="color: red" }>${location === item.destination}</span></p> \n`)

  // when test local
  console.log(`${item.origin} need redirect to ====> ${item.destination}, ===> valid result: ${location === item.destination}`)
}
