import { parseISO, format } from "date-fns";
import cn from "classnames";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className={cn("caption-2")} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
