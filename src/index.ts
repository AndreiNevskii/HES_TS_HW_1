import {usersArray, IUser} from './users';
import {IUserInfoOrg, IUserInfo, usersInfoArray} from './userInfo';

interface IUsersJob {
 name: string;
 position: string;
 age: number;
 gender: string
}

function getUsersJobPositions(usersArray: IUser[]): IUsersJob[] {
  return usersArray.map (item => {const newArray = usersInfoArray.find(item1 => item1.userid === item.userid);
  return {
    name: item.name,
    position: newArray ?  newArray.organization.position : '',
    age: newArray ? newArray.age : 0,
    gender: item.gender}
  });
}


//function getUsersJobPositions(usersArray: IUser[]) {const newArray = usersArray
//  .map((item, index) => ({...item, ...usersInfoArray[index]}))
//  .map((item) => ({name: item.name, position: item.organization.position,
//   age: item.age, gender: item.gender}));

//   return newArray;
  
//  }

// interface IForArr3 {userid: string;
//     name: string;
//     gender: string;
//     birthdate: string;
//     age: number;
//     organization: { name?: string; position: string; }
//   }


//Громоздкий вариант через создание в массиве плоских объектов в Map
// function getUsersJobPositions(usersArray: IUser[]) {
//   const arr3 = usersArray.map((item: IUser, index: number) => ({...item, ...usersInfoArray[index]}))
//   const flatObject = (arr3: IForArr3[])=> {
//     const arr = [];
//       for (let i = 0; i < arr3.length; i++)
//        {arr.push(Object.entries(arr3[i]).flatMap(([key, val]) => {
//            if(typeof val === 'object') {delete val.name; return Object.entries(val)};
//         return [[key, val]];
//      }))}
//   return arr;
//      }
//   const arr4 = flatObject(arr3);
  
//   const arr5 =[];
//   for (let j: number = 0; j<arr4.length; j++)
//   arr5.push(Object.fromEntries(arr4[j]))
//   const newArray = arr5.map((item) => ({name: item.name, position: item.position,
//   age: item.age, gender: item.gender}))
//   return newArray
// }
  
  const usersPositions = getUsersJobPositions(usersArray); 
  console.log(usersPositions);
