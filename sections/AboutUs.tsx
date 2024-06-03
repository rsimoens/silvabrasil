import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title: string;
  subTitle: string;
  /**
   * @format rich-text
   */
  description?: string;
  image: ImageWidget;
}

export default function AboutUsSection(
  {
    title = "About us",
    subTitle = "Subtitle text",
    description = "Description text",
    image,
  }: Props,
) {
  return (
    <div
      id="about-us"
      class="py-16 lg:container md:max-w-[88%] lg:mx-auto px-6"
    >
      <div class="w-full flex justify-between mb-8">
        <div class="flex flex-col">
          <h2 class="text-4xl border-2 border-green-900 text-green-900 rounded-[106px] px-7 py-2 mb-4 whitespace-nowrap w-fit">
            {title}
          </h2>
          <span class="text-black text-lg ml-8">{subTitle}</span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="214"
          height="90"
          viewBox="0 0 214 90"
          fill="none"
        >
          <path
            d="M73.7464 85.5256C73.3444 85.0969 73.3253 84.6617 73.7336 84.2266C73.74 84.6617 73.74 85.0904 73.7464 85.5256Z"
            fill="#004D3D"
          />
          <path
            d="M73.7464 85.5256C73.3444 85.0969 73.3253 84.6617 73.7336 84.2266C73.74 84.6617 73.74 85.0904 73.7464 85.5256Z"
            fill="#004D3D"
          />
          <path
            d="M212.249 82.1696C208.529 80.9688 207.687 78.2298 207.738 74.6275C207.859 66.9491 207.834 59.2576 207.751 51.5792C207.668 43.9787 203.961 38.7407 196.974 36.0666C194.275 35.0346 191.461 34.5088 188.609 34.2817C182.752 33.8078 176.99 34.1713 171.656 37.0012C166.877 39.5391 163.999 43.44 163.751 49.0803C163.642 51.5403 164.612 53.2863 166.934 54.182C171.867 56.0902 175.433 54.0002 176.135 48.7558C176.869 43.3166 181.233 40.4283 186.995 41.5706C192.355 42.6351 194.945 46.8021 193.51 52.1504C192.514 55.876 189.694 57.2715 186.28 57.8751C181.661 58.6865 176.997 59.2836 172.46 60.4195C166.175 61.9837 161.945 65.8262 160.79 72.6543C159.552 79.9303 162.455 85.7394 168.708 88.1929C176.939 91.4253 187.824 88.7965 193.835 81.923C194.639 85.4798 196.617 87.9398 200.03 88.3032C203.725 88.6927 207.496 88.485 211.228 88.3941C212.894 88.3552 213.742 87.1414 213.953 85.5317C214.151 84.0389 213.755 82.6564 212.249 82.1696ZM192.597 75.2895C190.523 80.9818 184.966 83.7728 179.3 81.9424C176.384 81.0013 174.649 78.6841 174.444 75.4583C174.196 71.4536 175.931 68.2017 179.134 66.6635C180.736 65.8911 182.478 65.6574 184.188 65.3459C187.384 64.7812 190.619 64.4631 193.905 63.1975C193.937 67.5267 193.982 71.486 192.597 75.2895Z"
            fill="#004D3D"
          />
          <path
            d="M73.7458 85.5255C72.6547 87.9725 70.7852 88.6021 68.2266 88.5242C62.5096 88.3489 56.7799 88.4333 51.0565 88.4852C49.0977 88.5047 47.5663 87.9854 47.1261 85.837C46.6986 83.7536 47.6238 82.4619 49.5762 81.7739C52.1667 80.8652 53.2514 78.8986 53.2514 76.179C53.2323 67.4426 53.2323 58.7127 53.2514 49.9828C53.2578 47.2956 52.1157 45.4782 49.5316 44.7773C47.9237 44.3489 47.075 43.4012 47.0304 41.7137C46.9857 39.9352 47.8471 38.7539 49.4614 38.2542C53.7172 36.956 57.9603 35.6319 62.2608 34.4961C65.5021 33.6458 67.0845 34.9764 67.0973 38.4359C67.1292 50.4046 67.1611 62.3669 67.0781 74.3356C67.0526 78.0418 67.697 81.1119 71.7487 82.2283C72.7632 82.5074 72.9163 83.7211 73.7331 84.2274C73.3247 84.6622 73.3438 85.0971 73.7458 85.5255Z"
            fill="#004D3D"
          />
          <path
            d="M43.1577 69.7788C43.9234 78.8786 40.8863 84.6877 33.8549 87.4852C29.7203 89.1273 25.3751 89.4714 22.7144 89.4454C16.4295 89.4129 11.9121 89.0495 7.61798 87.3879C3.4068 85.7587 0.439836 82.9937 0.0378604 78.0868C-0.255646 74.5169 1.16084 72.3361 4.16609 71.7973C7.43932 71.2132 9.80013 72.7904 10.7381 76.1915C12.0333 80.8842 15.7404 82.8963 21.9424 82.2667C26.4024 81.8189 28.9865 79.3265 29.3119 75.166C29.6054 71.4339 27.9273 68.9544 24.2713 68.0782C20.5641 67.1955 16.7932 66.5724 13.0861 65.7091C5.58257 63.9631 1.63938 58.894 1.35864 50.7871C1.09065 43.2256 4.88071 37.6566 12.0333 35.5017C18.7457 33.4766 25.541 33.5091 32.2278 35.599C37.0133 37.0919 40.178 40.2204 40.6438 45.5881C40.9309 48.9373 39.3804 51.0662 36.3752 51.4816C32.9169 51.9555 30.4285 50.5016 30.0074 47.2497C29.2481 41.4406 24.686 40.7916 20.5897 41.4926C16.5125 42.1935 14.5154 45.7634 15.4533 50.3523C16.0403 53.1952 17.8971 54.8503 20.5578 55.4994C24.1819 56.3756 27.8508 57.0831 31.5004 57.8555C38.417 59.3158 42.6473 63.6386 43.1577 69.7788Z"
            fill="#004D3D"
          />
          <path
            d="M157.172 41.8887C151.615 43.3101 149.624 47.7173 147.735 52.5009C143.384 63.5025 138.834 74.4263 134.381 85.3954C133.513 87.5309 132.339 89.2379 129.812 89.4002C127.152 89.5819 125.658 88.5304 124.338 85.324C120.669 76.3864 117.032 67.4358 113.389 58.4917C112.113 55.3632 110.779 52.2542 109.573 49.0933C108.316 45.796 106.179 43.4594 102.803 42.4728C100.589 41.8238 99.3131 40.5386 99.6449 38.1046C100.009 35.4824 101.91 35.1254 104.073 35.1319C110.913 35.1644 117.753 35.1449 124.587 35.1449C126.501 35.1449 128.121 35.6122 128.466 37.858C128.715 39.5326 128.217 40.8112 126.539 41.5771C123.527 42.9402 123.093 44.0241 124.159 47.2759C124.759 49.1128 125.499 50.8977 126.214 52.6956C128.491 58.4203 130.788 64.1386 133.251 70.2982C134.834 66.313 136.269 62.7496 137.667 59.1603C139.192 55.2659 140.78 51.3845 142.152 47.4317C143.313 44.0695 142.79 42.9661 139.664 41.5706C137.954 40.8112 137.552 39.5066 137.73 37.845C137.922 36.1055 139.07 35.2293 140.646 35.2098C145.808 35.1319 150.983 35.1319 156.145 35.2163C157.746 35.2423 158.799 36.2483 159.073 37.9034C159.367 39.6689 158.933 41.4408 157.172 41.8887Z"
            fill="#004D3D"
          />
          <path
            d="M100.002 85.8307C99.7342 87.3885 98.7452 88.3815 97.2649 88.401C90.3548 88.4789 83.4382 88.4724 76.5281 88.3945C74.8372 88.3815 74.1226 87.038 73.7462 85.5257C73.7398 85.0908 73.7398 84.6624 73.7334 84.2275C74.3076 83.0332 75.1244 82.1765 76.426 81.7221C78.9144 80.8524 79.9864 78.9377 79.9864 76.3089C79.98 58.6869 79.9736 41.0583 79.9991 23.4362C80.0055 20.7361 78.8761 18.9122 76.3111 18.2047C74.7032 17.7634 73.8291 16.8417 73.7844 15.1671C73.7398 13.2913 74.7224 12.1295 76.4324 11.6038C80.4521 10.3641 84.4591 9.06592 88.5236 7.98199C92.2371 6.98892 93.8513 8.37142 93.8577 12.3761C93.8705 32.8282 93.9024 53.2802 93.8322 73.7322C93.8194 77.6525 94.2725 80.9562 98.6687 82.2998C100.136 82.7477 100.257 84.3768 100.002 85.8307Z"
            fill="#004D3D"
          />
          <path
            d="M73.7464 85.5256C73.3444 85.0969 73.3253 84.6617 73.7336 84.2266C73.74 84.6617 73.74 85.0904 73.7464 85.5256Z"
            fill="#004D3D"
          />
          <path
            d="M68.9606 1.80886C66.9124 10.0909 65.4193 18.6326 58.2476 24.4352C54.3937 27.5507 50.023 28.8229 46.4691 28.758C38.5954 28.3815 38.8889 28.4724 39.6418 21.6832C40.4203 14.6279 43.0874 8.45528 49.0213 4.15847C54.6808 0.0563874 61.0933 -0.346032 67.7036 0.1862C68.7245 0.264088 69.1903 0.880699 68.9606 1.80886Z"
            fill="#85B549"
          />
        </svg>
      </div>

      <div class="relative py-12 px-4 lg:px-12 bg-green-900 rounded-2xl text-white flex items-center">
        <div
          class="font-regular text-[28px] max-w-[800px]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <Image
          class="absolute -top-52 aspect-auto right-0 h-auto z-10 max-w-[332px]  max-h-[240px] lg:max-w-full lg:max-h-[705px]"
          width={714}
          height={705}
          src={image}
          alt="Muda Silva"
          decoding="async"
          loading="lazy"
        />
      </div>
    </div>
  );
}
