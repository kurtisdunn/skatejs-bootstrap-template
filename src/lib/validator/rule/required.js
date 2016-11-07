export default function (elem, done) {
  done(elem.value ? null : ['This field is required']);
}
