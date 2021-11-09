import Link from "next/link"
import PropTypes, {InferProps} from "prop-types";

export const LinkComponent = ({child, target}: InferProps<typeof LinkComponent.propTypes>) => {
    return (
        <Link href={target}>
            {child}
        </Link>
    )
}

LinkComponent.propTypes = {
    child: PropTypes.any.isRequired,
    target: PropTypes.string.isRequired
}