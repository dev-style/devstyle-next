import Spinner from "@/app/(client)/components/spinner";

export default function LoadingPage() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <Spinner size={100} thickness={10} color={"#220f0033"} />
    </div>
  );
}
