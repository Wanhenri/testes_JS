function temHabilidade(skills) {
  return skills.indexOf("voar") !== -1;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));
console.log(skills[1])
