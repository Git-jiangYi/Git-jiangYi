const Johnaverage = (89+120+103)/3;
const Mikeaverage = (116+94+123)/3;
if (Johnaverage>Mikeaverage){
    console.log('John和Mike队的平均分分别为：'+Johnaverage+'  '+Mikeaverage);
    console.log('所以获胜的队伍是John队');
}else if(Johnaverage<Mikeaverage){
    console.log('John和Mike队的平均分分别为：'+Johnaverage+'  '+Mikeaverage);
    console.log('所以获胜的队伍是Mike队');
}else if(Johnaverage==Mikeaverage){
    console.log('John和Mike队的平均分分别为：'+Johnaverage+'  '+Mikeaverage);
    console.log('所以两队平局');
}

const Johnaverage = (11+36)/3;
const Mikeaverage = (11+46)/3;
const Maryaverage =(11+76)/3;
if (Johnaverage>Mikeaverage&&Johnaverage>Maryaverage){
    console.log('John、Mike和Mary队的平均分分别为：'+Johnaverage+'  '+Mikeaverage+'  '+Maryaverage);
    console.log('所以获胜的队伍是John队');
}else if(Mikeaverage>Johnaverage&&Mikeaverage>Maryaverage){
    console.log('John、Mike和Mary队的平均分分别为：'+Johnaverage+'  '+Mikeaverage+'  '+Maryaverage);
    console.log('所以获胜的队伍是Mike队');
}else if(Maryaverage>Johnaverage&&Maryaverage>Mikeaverage){
    console.log('John、Mike和Mary队的平均分分别为：'+Johnaverage+'  '+Mikeaverage+'  '+Maryaverage);
    console.log('所以获胜的队伍是Mary队');
}else if(Johnaverage==Mikeaverage&&Johnaverage==Maryaverage){
    console.log('John、Mike和Mary队的平均分分别为：'+Johnaverage+'  '+Mikeaverage+'  '+Maryaverage);
    console.log('所以三队平局');
}
