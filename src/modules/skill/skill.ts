//Domain : Category
interface ISkill {
    id: number;
    name: string;
  }
  
  export type SkillProps = {
    id: number;
    name: string;
  };
  
  export class Skill implements ISkill {
    public id: number;
    public name: string;
  
    constructor(props: SkillProps) {
      this.id = props.id;
      this.name = props.name;
    }
  }