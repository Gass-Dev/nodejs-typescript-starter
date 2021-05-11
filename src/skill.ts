interface ISkill {
    name: string
    description: string
    optionProps:number
    getSkill: () => string
}
type SkillProps = {
    name: string
    description: string
    optionProps?: number
}
class Skill implements ISkill {
    public name: string
    public description: string
    public optionProps: number

    constructor(props: SkillProps) {
        this.name = props.name
        this.description = props.description
        if (props.optionProps) this.optionProps = props.optionProps
    }

    public getSkill(): string {
        return `Skill : ${this.name}`
    }
}

const skillCda = {
    name: 'Maqueter une application',
    description: 'Maqueter une application'
};

const skill1: Skill = new Skill(skillCda)
console.log(skill1.getSkill())
