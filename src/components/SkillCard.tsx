import AnimatedContainer from "./AnimatedContainer"

interface SkillCardProps {
  name: string
  icon?: string
  delay?: number
}

export default function SkillCard({
  name,
  icon,
  delay = 0,
}: SkillCardProps) {
  return (
    <AnimatedContainer delay={delay}>
      <div className="rounded-xl border border-border bg-background p-4 text-center transition-all hover:border-accent hover:bg-accent/5">
        {icon && <div className="mb-2 text-2xl">{icon}</div>}
        <h4 className="text-sm font-medium text-foreground">{name}</h4>
      </div>
    </AnimatedContainer>
  )
}

