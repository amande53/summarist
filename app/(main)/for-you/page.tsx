import BookSection from "../../components/for-you/BookSection";

export default function Page() {
  return (
    <div className="w-full max-w-267.5 mx-auto my-0 px-6">
      <div className="py-10 w-full">
        <BookSection
          title="Selected just for you"
          status="selected"
        />
        <BookSection
          title="Recommended For You"
          subTitle="We think you'll like these"
          status="recommended"
        />
        <BookSection
          title="Suggested Books"
          subTitle="Browse those books"
          status="suggested"
        />
      </div>
    </div>
  );
}
