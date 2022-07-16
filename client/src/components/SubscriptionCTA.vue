<template>
  <aside id="revue-embed" class="p-4 my-8 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700" aria-label="Subscribe to the Flowbite newsletter">
    <h3 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">Get more updates...</h3>
    <p class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">Do you want to get notified when a new vehicle is added to Acme AutoZone? Sign up for our newsletter and you'll be among the first to find out about new vehicles, models, deals, and offers.</p>
    <form>
    <div class="flex items-end mb-3">
      <div class="relative mr-3 w-full revue-form-group">
        <label for="member_email" class="block hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input class="revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email address..." type="email" name="member[email]" id="member_email" required>
      </div>
      <div class="revue-form-actions">
        <input type="submit" value="Subscribe" class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="member[subscribe]" id="member_submit">
      </div>
    </div>
    <div class="text-sm font-medium text-gray-500 revue-form-footer dark:text-gray-300">By subscribing, you agree with Acme's <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Terms of Service</a> and <a class="text-blue-600 hover:underline dark:text-blue-500" href="#">Privacy Policy</a>.</div>
    </form>
  </aside>
</template>