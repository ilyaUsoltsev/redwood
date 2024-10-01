import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String14254',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-10-01T17:35:15.010Z',
      },
    },
    two: {
      data: {
        email: 'String3041283',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-10-01T17:35:15.010Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
