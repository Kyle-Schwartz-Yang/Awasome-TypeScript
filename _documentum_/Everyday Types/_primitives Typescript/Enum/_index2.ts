
// Classic enum
enum Membership {
  Simple,
  Stanard,
  Premium
}

const membership = Membership.Stanard;
const membershipReverse = Membership[2]
console.log(membership); // 1
console.log(membershipReverse); // Premium

// ------------------------------------------------------------------------------

