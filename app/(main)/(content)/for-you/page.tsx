import BookSection from "../../../components/for-you/BookSection";

export default function Page() {
  return (
    <>
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
    </>
  );
}
