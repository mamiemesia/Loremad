class Professional {
  private experience: number;

  constructor(experience: number) {
    this.experience = experience;
  }

  public getExperienceStatement(): string {
    // Check if experience is 1 to use 'year' instead of 'years'
    const yearOrYears = this.experience === 1 ? 'year' : 'years';
    return `I've ${this.experience} ${yearOrYears} of experience.`;
  }
}

// Usage
const professional = new Professional(5);
console.log(professional.getExperienceStatement());
