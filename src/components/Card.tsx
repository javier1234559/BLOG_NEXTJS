import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
 
// type Props = {
//   data: {
//     title: string;
//     description: string;
//     date: string;
//   };
// }

function CardPost({}: Props) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More 
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default CardPost;