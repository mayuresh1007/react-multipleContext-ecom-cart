import React, { useContext } from "react";
import { CartContext } from "../context/Appcontext";

const CheckOut = ({ TotalPrice }) => {
  const { cart } = useContext(CartContext);
  //   (() => {
  //     "use strict";
  //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //     const forms = document.querySelectorAll(".needs-validation");
  //     // Loop over them and prevent submission
  //     Array.from(forms).forEach((form) => {
  //       form.addEventListener(
  //         "submit",
  //         (event) => {
  //           if (!form.checkValidity()) {
  //             event.preventDefault();
  //             event.stopPropagation();
  //           }

  //           form.classList.add("was-validated");
  //         },
  //         false
  //       );
  //     });
  //   })();
  return (
    <div>
      {/* <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#circle-half"></use>
          </svg>
          <span class="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              class="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              <svg
                class="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#sun-fill"></use>
              </svg>
              Light
              <svg class="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              <svg
                class="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              <svg class="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              <svg
                class="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#circle-half"></use>
              </svg>
              Auto
              <svg class="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div> */}

      <main className="container">
        <div class="py-5 text-center">
          <h2>Checkout form</h2>
        </div>

        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">{cart.length}</span>
            </h4>
            <ul class="list-group mb-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  class="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 class="my-0">{item.title}</h6>
                    <small class="text-body-secondary">Brief description</small>
                  </div>
                  <span class="text-body-secondary">{item.price}</span>
                </li>
              ))}

              <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">−$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>{TotalPrice}</strong>
              </li>
            </ul>

            <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" class="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Username"
                      required
                    />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label for="email" class="form-label">
                    Email <span class="text-body-secondary">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label for="address" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="col-12">
                  <label for="address2" class="form-label">
                    Address 2{" "}
                    <span class="text-body-secondary">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div class="col-md-5">
                  <label for="country" class="form-label">
                    Country
                  </label>
                  <select class="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="state" class="form-label">
                    State
                  </label>
                  <select class="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="zip" class="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr class="my-4" />

              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="same-address"
                />
                <label class="form-check-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="save-info"
                />
                <label class="form-check-label" for="save-info">
                  Save this information for next time
                </label>
              </div>

              <hr class="my-4" />

              <h4 class="mb-3">Payment</h4>

              <div class="my-3">
                <div class="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    checked
                    required
                  />
                  <label class="form-check-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    required
                  />
                  <label class="form-check-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    required
                  />
                  <label class="form-check-label" for="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small class="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>

                <div class="col-md-6">
                  <label for="cc-number" class="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>

                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckOut;
