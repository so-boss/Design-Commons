export const limits = [
  {
    person:25000,
    max:50000
  },
  {
    person:30000,
    max:60000
  },
  {
    person:50000,
    max:100000
  },
  {
    person:100000,
    max:200000
  },
  {
    person:100000,
    max:300000
  },
  {
    person:300000,
    max:300000
  },
  {
    person:300000,
    max:500000
  },
  {
    person:500000,
    max:500000
  },
];

export const maps = {
  limits: {
    25:{
      max:[50]
    },
    30:{
      max:[60]
    },
    50:{
      max:[100]
    },
    100:{
      max:[200,300]
    },
    300:{
      max:[300,500]
    },
    500:{
      max:[500]
    }
  }
}