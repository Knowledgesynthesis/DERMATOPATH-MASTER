import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card'
import { cn } from '@/lib/utils'
import { Module } from '@/types'

interface ModuleCardProps {
  module: Module
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  return (
    <Link to={module.path} className="block">
      <Card className="group cursor-pointer transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className={cn('mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg', module.color)}>
                <span className="text-xl">{module.icon}</span>
              </div>
              <CardTitle className="text-lg mb-2">{module.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {module.description}
              </CardDescription>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default ModuleCard
