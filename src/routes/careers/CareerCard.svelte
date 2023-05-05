<script lang="ts">
	export let startDate: string = '2021.01';
	export let endDate: string = '현재';
	export let isLeft: boolean = false;
	export let title: string = 'Software Engineer';
	export let description: string =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quaerat vitae quidem odit ipsam nemo repudiandae culpa, perspiciatis non suscipit laborum! Quae animi doloremque cumque reiciendis, voluptate doloribus quod ipsam!';
</script>

<div
	class="w-full rounded-2xl {isLeft
		? 'max-md:rounded-bl-none md:rounded-br-none'
		: 'rounded-bl-none'} bg-neutral-300 p-4"
>
	<h1 class="font-medium text-green-800">{startDate + ' ~ ' + endDate}</h1>
	<h2 class="font-bold text-green-800">{title}</h2>
	<p class="text-neutral-500">
		{description}
	</p>
</div>
