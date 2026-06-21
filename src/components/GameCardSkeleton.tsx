import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root width='300px' borderRadius={10}>
        <Skeleton height='200px'/>
        <Card.Body>
            <SkeletonText />
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton