import { UserXp } from './UserXp';

export interface MarketplaceUser {
    xp?: UserXp
    ID?: string
    Username?: string
    Password?: string
    FirstName?: string
    LastName?: string
    Email?: string
    Phone?: string
    TermsAccepted?: string
    Active?: boolean
    AvailableRoles?: string[]
    DateCreated?: string
    PasswordLastSetDate?: string
}