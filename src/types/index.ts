export interface User {
    id: string;
    email: string;
    name: string;
    phone: string;
    role: 'worker';
    profilePicture?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Company {
    id: string;
    name: string;
    description: string;
    logo?: string;
    verified: boolean;
    jobRoles: JobRole[];
    createdAt: Date;
}

export interface JobRole {
    id: string;
    companyId: string;
    title: string;
    description: string;
    requiredTrainingIds: string[];
    createdAt: Date;
}

export interface TrainingProgram {
    id: string;
    companyId: string;
    title: string;
    description: string;
    modules: TrainingModule[];
    totalDuration?: number;
    createdAt: Date;
}

export interface TrainingModule {
    id: string;
    programId: string;
    title: string;
    type: 'video' | 'document' | 'quiz';
    content: string; // URL for video/document, JSON for quiz
    duration?: number;
    order: number;
}

export interface Quiz {
    id: string;
    moduleId: string;
    questions: QuizQuestion[];
    passingScore: number;
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface TrainingProgress {
    id: string;
    userId: string;
    programId: string;
    companyId: string;
    completedModules: string[];
    progress: number; // 0-100
    status: 'not_started' | 'in_progress' | 'completed';
    startedAt?: Date;
    completedAt?: Date;
}

export interface Subscription {
    id: string;
    userId: string;
    planId: string;
    status: 'active' | 'expired' | 'cancelled';
    startDate: Date;
    endDate: Date;
    autoRenew: boolean;
}

export interface SubscriptionPlan {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    duration: 'monthly' | 'yearly';
    features: string[];
}

export interface Shift {
    id: string;
    companyId: string;
    jobRoleId: string;
    date: Date;
    startTime: string;
    endTime: string;
    duration: number;
    location?: string;
    notes?: string;
    status: 'open' | 'filled' | 'completed' | 'cancelled';
    createdAt: Date;
}

export interface ShiftRequest {
    id: string;
    shiftId: string;
    userId: string;
    companyId: string;
    status: 'pending' | 'approved' | 'rejected';
    requestedAt: Date;
    respondedAt?: Date;
}

export interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: 'shift_approved' | 'shift_rejected' | 'training_completed' | 'subscription_reminder' | 'shift_reminder' | 'general';
    read: boolean;
    data?: any;
    createdAt: Date;
}

export interface UserAvailability {
    userId: string;
    weeklySchedule: {
        monday: TimeSlot[];
        tuesday: TimeSlot[];
        wednesday: TimeSlot[];
        thursday: TimeSlot[];
        friday: TimeSlot[];
        saturday: TimeSlot[];
        sunday: TimeSlot[];
    };
    blackoutDates: Date[];
}

export interface TimeSlot {
    startTime: string;
    endTime: string;
}
