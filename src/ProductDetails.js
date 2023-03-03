import React from 'react';

export default function ProductDetails({ product }) {
  return (
    <main class="l-pdp-details b-product_details" aria-label="Product details">
      <div class="b-product_details-breadcrumbs"></div>
      <h1 class="b-product_details-name">{product.id}</h1>
      <div class="b-product_details-form" data-ref="productForm">
        <div class="b-product_details-price" data-tau="product_details_price">
          <div class="b-price ">
            <span class="b-price-to b-sr_only">Is</span>
            <span class="b-price-item m-new">
              £26.25
              <meta itemprop="priceCurrency" content="GBP" />
            </span>
            <span class="b-price-to b-sr_only">, was</span>
            <span
              class="b-price-item m-old"
              data-tau-price="old"
              itemprop="price"
              content="35.00"
            >
              £35.00
              <meta itemprop="priceCurrency" content="GBP" />
            </span>
            <span class="b-price-discount">25% OFF</span>
          </div>
          <div
            data-id="priceEstablishment"
            data-widget="widget"
            data-initialized="1"
          >
            <div data-ref="container"></div>
          </div>
        </div>
        <div class="b-product_details-variations">
          <div class="b-product_details-variations_line">
            <div
              class="b-variation_label"
              data-id="attr-line-color"
              data-widget="widget"
              data-initialized="1"
            >
              <span class="b-variation_label-name">Colour:</span>
              <span class="b-variation_label-value" data-ref="lineContainer">
                white
              </span>
            </div>
            <div
              class="b-variation_label"
              data-id="attr-line-size"
              data-widget="widget"
              data-initialized="1"
            >
              <span class="b-variation_label-name">Size:</span>
              <span class="b-variation_label-value" data-ref="lineContainer">
                Select
              </span>
            </div>
          </div>
          <section class="b-variations_item m-swatch m-color">
            <div data-ref="container" class="b-variations_container">
              <div
                role="radiogroup"
                aria-label="Colour"
                aria-describedby="variation-error-1-color"
                class="b-variations_item-content m-list"
              >
                <button
                  id="variation-swatch-button-1-105"
                  class="b-variation_swatch m-swatch  "
                  type="button"
                >
                  <span data-attr-value="105" class="b-variation_swatch-value">
                    <span class="b-variation_swatch-color_value"></span>
                  </span>
                </button>
                <button
                  id="variation-swatch-button-1-173"
                  class="b-variation_swatch m-swatch  "
                  type="button"
                >
                  <span data-attr-value="173" class="b-variation_swatch-value">
                    <span class="b-variation_swatch-color_value"></span>
                  </span>
                </button>
              </div>
              <div
                role="alert"
                id="variation-error-1-color"
                class="b-variations_item-error"
                data-ref="errorFeedback"
                hidden="hidden"
              ></div>
            </div>
          </section>
          <section class="b-variations_item m-swatch m-size">
            <div data-ref="container" class="b-variations_container">
              <div
                role="radiogroup"
                aria-label="Size"
                aria-describedby="variation-error-1-size"
                class="b-variations_item-content m-list"
              >
                <button
                  id="variation-swatch-button-1-18"
                  class="b-variation_swatch m-disabled "
                  role="radio"
                  aria-checked="false"
                  aria-disabled="true"
                  disabled=""
                  data-allow-unselect="true"
                  aria-label="10"
                  data-global-event-click="pdp.swatch.select"
                  data-swatch-name="10"
                  data-attr-url="https://www.boohoo.com/on/demandware.store/Sites-boohoo-UK-Site/en_GB/Product-Variation?dwvar_FZZ81092_color=173&amp;dwvar_FZZ81092_size=18&amp;pid=FZZ81092&amp;quantity=1"
                  data-attr-is-selected="false"
                  data-attr-value="18"
                  data-tau="variation_swatch"
                  data-tau-size-id="18"
                  title="Size: 10 (not available)"
                >
                  <span class="b-variation_swatch-value">
                    <span class="b-variation_swatch-value_text">10</span>
                  </span>
                </button>
                <button
                  id="variation-swatch-button-1-20"
                  class="b-variation_swatch  "
                  role="radio"
                >
                  <span class="b-variation_swatch-value">
                    <span class="b-variation_swatch-value_text">12</span>
                  </span>
                </button>
                <button
                  id="variation-swatch-button-1-22"
                  class="b-variation_swatch  "
                >
                  <span class="b-variation_swatch-value">
                    <span class="b-variation_swatch-value_text">14</span>
                  </span>
                </button>
              </div>
              <div
                role="alert"
                id="variation-error-1-size"
                class="b-variations_item-error"
                data-ref="errorFeedback"
                hidden="hidden"
              ></div>
            </div>
          </section>
        </div>
      </div>
      <div data-id="hazmat" data-widget="widget" data-initialized="1">
        <div data-ref="container"></div>
      </div>
      <div class="b-product_details-actions">
        <div class="b-coming_soon-pdp_form">
          <div
            data-ref="disclosureContent"
            class="m-hide"
            hidden="hidden"
          ></div>
        </div>
        <div class="b-product_actions">
          <div class="b-product_actions-inner">
            <div class="b-product_details-quantity">
              <div>
                <div data-ref="container">
                  <label class="b-sr_only" for="quantity-1">
                    QTY
                  </label>
                  <div class="b-stepper">
                    <div
                      class="b-stepper-button"
                      role="button"
                      tabindex="-1"
                      data-ref="buttonDecrease"
                      data-event-click="decrement"
                      disabled="disabled"
                    >
                      <svg
                        aria-hidden="true"
                        width="12"
                        height="12"
                        viewBox="0 0 10 10"
                        focusable="false"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M10 4v2H0V4z"
                        ></path>
                      </svg>
                    </div>
                    <input id="quantity-1" class="b-stepper-input" />
                    <div
                      class="b-stepper-button"
                      role="button"
                      tabindex="-1"
                      data-ref="buttonIncrease"
                      data-event-click="increment"
                    >
                      <svg
                        aria-hidden="true"
                        width="12"
                        height="12"
                        viewBox="0 0 10 10"
                        focusable="false"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M6 0v4h4v2H6v4H4V6H0V4h4V0h2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    role="alert"
                    class="b-variations_item-error"
                    id="quantity-1-error"
                    data-ref="errorFeedback"
                    hidden="hidden"
                  ></div>
                </div>
              </div>
            </div>
            <div
              data-ref="disclosureContent"
              class="b-coming_soon-content_wrapper m-hide"
              hidden="hidden"
              aria-hidden="true"
            ></div>
            <button
              class="b-product_addtocard b-button m-width_full "
              type="button"
            >
              <span
                class="b-product_addtocard-availability"
                data-ref="container"
              >
                Add to cart
              </span>
            </button>
            <div class="b-product_actions m-auxiliary b-product_wishlist">
              <button
                type="button"
                class="b-button m-outline b-product_wishlist-button b-wishlist_button"
              >
                <i
                  class="b-button-icon b-wishlist_button-icon"
                  aria-hidden="true"
                ></i>
                <span data-ref="container">Save for later</span>
              </button>
              <a class="b-button b-product_actions-see_similar" href="">
                <span data-ref="container">See similar</span>
              </a>
            </div>
          </div>
        </div>
        <div
          role="alert"
          hidden="hidden"
          class="b-message m-error b-product_wishlist-action m-hide"
        >
          <div data-ref="container" class="b-message-inner">
            <div class="b-notifier-content" data-ref="labelContent"></div>
          </div>
        </div>
      </div>
      <div
        class="b-product_actions m-hide"
        role="alert"
        hidden="hidden"
        data-widget="label"
        data-id="addToCartMsg"
        data-initialized="1"
      >
        <div data-ref="container"></div>
      </div>
      <section>
        <div data-ref="container"></div>
      </section>
    </main>
  );
}
