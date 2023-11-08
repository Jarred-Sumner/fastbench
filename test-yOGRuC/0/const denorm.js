const denormalisedUserGroups = [];

    for (const group of userGroups) {
      if (group.userAccess === 0) {
        const { id, userGroupId } = group;
        denormalisedUserGroups.push(
          { id, userGroupId, userAccess: 1},
          { id, userGroupId, userAccess: 2 }
        );
        continue;
      }

      denormalisedUserGroups.push(group);
    }