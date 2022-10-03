import { useEffect } from "react";
import { rootNotionPageId } from "../../lib/notationConfig";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    const url = `/about/${rootNotionPageId}`;
    router.push(url);
  }, [router]);

  return;
};
export default Redirect;
