export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    ourClasses = "ourclasses",
    ContactUs = "contactus"
    }
    
export type BenefitType = {
    icon: JSX.Element;
    title:string;
    description:string;
}

export type ClassType = {
    name: string,
    description?: string,
    image: string,
}