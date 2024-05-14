export default function Login() {
  return (
    <div className="container m-4  w-100 h-50  bg-warning p-4">
      <div class="mb-3 row p-4">
        <label for="user" class="col-sm-2 col-form-label">
          User
        </label>
        <div class="col-sm-10">
          <input className="form-control" type="text" id="user" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
    </div>
  );
}
