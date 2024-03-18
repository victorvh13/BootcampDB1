interface Person {
    name: string;
    type: "PF" | "PJ";
    age: 30 | 40;
    born: Date;
    mobile: number;
    homePohone?: number;
  }
  
  function showPerson(data: Person): Person {
    console.log(data);
    return data;
  }
  
  const me: Person = {
    name: "Eduardo",
    type: "PF",
    age: 30,
    born: new Date("2020/06/01"),
    mobile: 44666999,
  };
  
  showPerson(me);