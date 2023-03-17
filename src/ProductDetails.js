import React from 'react';

export default function ProductDetails({ product }) {
  return (
    <main
      className="l-pdp-details b-product_details"
      aria-label="Product details"
    >
      <div className="b-product_details-breadcrumbs"></div>
      <h1 className="b-product_details-name">{product.id}</h1>
      <div className="b-product_details-form" data-ref="productForm">
        <div
          className="b-product_details-price"
          data-tau="product_details_price"
        >
          <div className="b-price ">
            <span className="b-price-to b-sr_only">Is</span>
            <span className="b-price-item m-new">
              £26.25
              <meta itemprop="priceCurrency" content="GBP" />
            </span>
            <span className="b-price-to b-sr_only">, was</span>
            <span
              className="b-price-item m-old"
              itemprop="price"
              content="35.00"
            >
              £35.00
              <meta itemprop="priceCurrency" content="GBP" />
            </span>
            <span className="b-price-discount">25% OFF</span>
          </div>
          <div>
            <div data-ref="container"></div>
          </div>
        </div>
        <div className="b-product_details-variations">
          <div className="b-product_details-variations_line">
            <div className="b-variation_label">
              <span className="b-variation_label-name">Colour:</span>
              <span
                className="b-variation_label-value"
                data-ref="lineContainer"
              >
                white
              </span>
            </div>
            <div
              className="b-variation_label"
              data-id="attr-line-size"
              data-widget="widget"
              data-initialized="1"
            >
              <span className="b-variation_label-name">Size:</span>
              <span
                className="b-variation_label-value"
                data-ref="lineContainer"
              >
                Select
              </span>
            </div>
          </div>
          <section className="b-variations_item m-swatch m-color">
            <div data-ref="container" className="b-variations_container">
              <div
                role="radiogroup"
                className="b-variations_item-content m-list"
              >
                <button
                  id="variation-swatch-button-1-105"
                  className="b-variation_swatch m-swatch  "
                  type="button"
                >
                  <span
                    data-attr-value="105"
                    className="b-variation_swatch-value"
                  >
                    <span className="b-variation_swatch-color_value"></span>
                  </span>
                </button>
                <button
                  id="variation-swatch-button-1-173"
                  className="b-variation_swatch m-swatch  "
                  type="button"
                >
                  <span
                    data-attr-value="173"
                    className="b-variation_swatch-value"
                  >
                    <span className="b-variation_swatch-color_value"></span>
                  </span>
                </button>
              </div>
              <div
                role="alert"
                id="variation-error-1-color"
                className="b-variations_item-error"
                data-ref="errorFeedback"
                hidden="hidden"
              ></div>
            </div>
          </section>
          <section className="b-variations_item m-swatch m-size">
            <div data-ref="container" className="b-variations_container">
              <div className="b-variations_item-content m-list">
                <button
                  id="variation-swatch-button-1-18"
                  className="b-variation_swatch "
                >
                  <span className="b-variation_swatch-value">
                    <span className="b-variation_swatch-value_text">10</span>
                  </span>
                </button>
                <button
                  id="variation-swatch-button-1-20"
                  className="b-variation_swatch  "
                  role="radio"
                >
                  <span className="b-variation_swatch-value">
                    <span className="b-variation_swatch-value_text">12</span>
                  </span>
                </button>
                <button
                  id="variation-swatch-button-1-22"
                  className="b-variation_swatch  "
                >
                  <span className="b-variation_swatch-value">
                    <span className="b-variation_swatch-value_text">14</span>
                  </span>
                </button>
              </div>
              <div
                role="alert"
                id="variation-error-1-size"
                className="b-variations_item-error"
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
      <div className="b-product_details-actions">
        <div className="b-coming_soon-pdp_form">
          <div
            data-ref="disclosureContent"
            className="m-hide"
            hidden="hidden"
          ></div>
        </div>
        <div className="b-product_actions">
          <div className="b-product_actions-inner">
            <div className="b-product_details-quantity">
              <div>
                <div data-ref="container">
                  <label className="b-sr_only" for="quantity-1">
                    QTY
                  </label>
                  <div className="b-stepper">
                    <div
                      className="b-stepper-button"
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
                    <input id="quantity-1" className="b-stepper-input" />
                    <div
                      className="b-stepper-button"
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
                    className="b-variations_item-error"
                    id="quantity-1-error"
                    data-ref="errorFeedback"
                    hidden="hidden"
                  ></div>
                </div>
              </div>
            </div>
            <div
              data-ref="disclosureContent"
              className="b-coming_soon-content_wrapper m-hide"
              hidden="hidden"
              aria-hidden="true"
            ></div>
            <button
              className="b-product_addtocard b-button m-width_full "
              type="button"
            >
              <span
                className="b-product_addtocard-availability"
                data-ref="container"
              >
                Add to cart
              </span>
            </button>
            <div className="b-product_actions m-auxiliary b-product_wishlist">
              <button
                type="button"
                className="b-button m-outline b-product_wishlist-button b-wishlist_button"
              >
                <i
                  className="b-button-icon b-wishlist_button-icon"
                  aria-hidden="true"
                ></i>
                <span data-ref="container">Save for later</span>
              </button>
              <a className="b-button b-product_actions-see_similar" href="">
                <span data-ref="container">See similar</span>
              </a>
            </div>
          </div>
        </div>
        <div
          role="alert"
          hidden="hidden"
          className="b-message m-error b-product_wishlist-action m-hide"
        >
          <div data-ref="container" className="b-message-inner">
            <div className="b-notifier-content" data-ref="labelContent"></div>
          </div>
        </div>
      </div>
      <div className="b-product_actions m-hide" hidden="hidden">
        <div data-ref="container"></div>
      </div>
      <section>
        <div data-ref="container"></div>
      </section>
    </main>
  );
}
