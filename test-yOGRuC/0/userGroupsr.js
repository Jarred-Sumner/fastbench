userGroups.reduce((arr, group) => {
    const { id, userGroupId, userAccess } = group;
  if (userAccess === 0) {
        arr.push(
          { id, userGroupId, userAccess: 1},
          { id, userGroupId, userAccess: 2 }
        );
  } else arr.push({id, userGroupId, userAccess})
  
  return arr;
}, [])